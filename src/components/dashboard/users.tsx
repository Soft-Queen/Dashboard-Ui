import { Loader } from "../reusables/loader";
import { DataType } from "../utility/types";
import { UserCard } from "../reusables/card";
import Dropdown from "../reusables/dropdown";
import useUser from "../hook/useUser";

const Users = () => {
  const {
    isLoading,
    error,
    sortOption,
    setSortOption,
    filteredSubscriptions,
    handleDelete,
    page,
    setPage,
    totalPages,
    setSearchTerm,
    searchTerm,
    handleEdit
  } = useUser();

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="container  mx-auto justify-center">
        <div className="row">
          <div className="flex">
            <div className="">
              <div className="relative mt-[20px] px-2">
                <input
                  className="w-50 rounded-md border border-[#D1D4D6] bg-background focus:outline-none h-[48px] pl-[44px] text-[14px] placeholder:text-[#888C91] font-[400]"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-4 top-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 11.25L17.25 15.75"
                      stroke="#6B7480"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 13.5C10.5376 13.5 13.5 10.5376 13.5 7.5C13.5 4.46243 10.5376 1.5 7.5 1.5C4.46243 1.5 1.5 4.46243 1.5 7.5C1.5 10.5376 4.46243 13.5 7.5 13.5Z"
                      stroke="#6B7480"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="ml-4 mt-[20px]">
              <Dropdown
                options={["id", "title"]}
                selectedOption={sortOption}
                onOptionSelect={setSortOption}
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-[35px]">
              {filteredSubscriptions.map((user: DataType) => (
                <UserCard key={user.id} user={user} onDelete={handleDelete}  onEdit={handleEdit}/>
              ))}
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
          >
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              style={{ marginRight: "1rem" }}
            >
              <svg
                className={`w-6 h-6 `}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <span>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              style={{ marginLeft: "1rem" }}
            >
              <svg
                className={`w-6 h-6 `}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Users;
