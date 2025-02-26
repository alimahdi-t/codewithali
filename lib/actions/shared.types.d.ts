import { CourseStatus, Level } from "@prisma/client";

export interface CreateCourseParams {
  title: string;
  slug: string;
  description: string;
  content: string;
  price: number;
  instructorId: number;
  imageUrl: string;
  level: Level;
  status: CourseStatus;
}

export interface EditCourseParams extends CreateCourseParams {
  id: number;
}

export interface GetCourseBySlugParams {
  slug: string;
}

export interface GetAllCoursesParams {
  orderBy?: "newest" | "oldest" | "cheapest" | "mostExpensive" | "mostPopular"; // Sorting options
  isFree?: boolean; // Filter for free courses
  isPreOrder?: boolean; // Filter for courses available for pre-order
  levels?: string[]; // Filter by course levels (e.g., "beginner", "advanced", "expert")
  categories?: string[]; // Filter by course categories (e.g., "frontend", "backend", "python")
  searchQuery?: string; // Search query for course titles or descriptions
  page?: number; // Pagination support
  pageSize?: number; // Number of courses per page
}

export interface CreatePostParams {
  slug: string;
  title: string;
  content: string;
  imageUrl: string;
  authorId: number;
  tags?: number[];
  readingTime: number;
  isEditorPick?: boolean;
}

export interface UpdatePostParams extends CreatePostParams {
  id: number;
}

export interface GetPostParams {
  slug: string;
}
