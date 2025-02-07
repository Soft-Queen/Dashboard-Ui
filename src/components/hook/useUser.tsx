// src/hook/useUser.ts
import { useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../utility/apiFunction";
import { DataType } from "../utility/types";

const useUser = () => {
  // Fetch data using React Query.
  const { data, error, isLoading } = useQuery<DataType[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await getRequest("https://jsonplaceholder.typicode.com/posts");
      return response.data;
    },
  });

  // Local states for managing users and UI.
  const [usersData, setUsersData] = useState<DataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const postsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("id");

  // Update usersData when query data arrives.
  useEffect(() => {
    if (data) {
      setUsersData(data);
    }
  }, [data]);

  // Compute pagination values.
  const startIndex = (page - 1) * postsPerPage;
  const paginatedPosts = usersData.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(usersData.length / postsPerPage);

  // Handlers to update the users data.
  const handleDelete = (id: number) => {
    setUsersData((prevData) => prevData.filter((user) => user.id !== id));
  };

  const handleEdit = (id: number, newTitle: string) => {
    setUsersData((prevData) =>
      prevData.map((user) => (user.id === id ? { ...user, title: newTitle } : user))
    );
  };

  // Compute filtered and sorted users.
  const filteredSubscriptions = useMemo(() => {
    let filtered = paginatedPosts;
    if (searchTerm) {
      filtered = filtered.filter((user: DataType) =>
        user.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered.sort((a: DataType, b: DataType) => {
      if (sortOption === "id") {
        return a.id - b.id;
      } else if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return filtered;
  }, [paginatedPosts, searchTerm, sortOption]);

  return {
    isLoading,
    error,
    page,
    setPage,
    totalPages,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filteredSubscriptions,
    handleDelete,
    handleEdit,
  };
};

export default useUser;
