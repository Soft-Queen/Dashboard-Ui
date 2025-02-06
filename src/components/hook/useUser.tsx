import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../utility/apiFunction";
import { useMemo, useState } from "react";
import { DataType } from "../utility/types";

const useUser = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
          const response = await getRequest(
            "https://jsonplaceholder.typicode.com/posts"
          );
          return response.data;
        },
      });
  
  const [page, setPage] = useState<number>(1);
  const postsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("id");
  const [usersData, setUsersData] = useState<DataType[]>(data || []);
  
       const startIndex = (page - 1) * postsPerPage;
        const paginatedPosts = usersData?.slice(startIndex, startIndex + postsPerPage);
        const totalPages = data ? Math.ceil(usersData.length / postsPerPage) : 0;
      
        const filteredSubscriptions = useMemo(() => {
          let filtered = paginatedPosts || [];
      
          // Filter by search term if it's not empty
          if (searchTerm) {
            filtered = filtered.filter((users:DataType) =>
              users?.title.toLowerCase().includes(searchTerm.toLowerCase())
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
        const handleDelete = (id: number) => {
            setUsersData((prevData) => prevData.filter((user) => user.id !== id));
          };
          const handleEdit = (id: number, newTitle: string) => {
            setUsersData((prevData) =>
              prevData.map((user) =>
                user.id === id ? { ...user, title: newTitle } : user
              )
            );
          };
      return{ data, error, isLoading, filteredSubscriptions, setSearchTerm, handleDelete, setSortOption, sortOption, setPage, page, totalPages, searchTerm, handleEdit}


}
export default useUser