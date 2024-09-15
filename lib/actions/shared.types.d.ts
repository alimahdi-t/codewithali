export interface GetCourseByIdParams {
  id: number;
}

export interface GetAllCoursesParams {
  sortBy?: "newest" | "oldest" | "cheapest" | "mostExpensive" | "mostPopular"; // Sorting options
  isFree?: boolean; // Filter for free courses
  isPreOrder?: boolean; // Filter for courses available for pre-order
  levels?: string[]; // Filter by course levels (e.g., "beginner", "advanced", "expert")
  categories?: string[]; // Filter by course categories (e.g., "frontend", "backend", "python")
  searchQuery?: string; // Search query for course titles or descriptions
  page?: number; // Pagination support
  pageSize?: number; // Number of courses per page
}
export interface CreateCourseParams {
  title: string;
  content: string;
  description: string;
}

export interface UpdateCourseParams {
  id: Number | string;
  title?: string;
  content?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  price?: number | string;
}

export interface DeleteCourseParams {
  id: number | string;
}
