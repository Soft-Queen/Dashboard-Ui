export type DataType = {
    id: number;
    title: string;
  };

  export type UserProps = {
    user: DataType;
    onDelete: (id: number) => void;
    onEdit?: (id: number, newTitle: string) => void;
  };