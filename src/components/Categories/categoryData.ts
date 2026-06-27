import {
  BookOpen,
  Laptop,
  BriefcaseBusiness,
  GraduationCap,
  Scale,
  Microscope,
  Calculator,
  Landmark,
} from "lucide-react";

/* =====================================================
   Category Interface
===================================================== */

export interface Category {
  id: number;

  title: string;

  courses: string;

  icon: any;

  color: string;
}

/* =====================================================
   Category Data
===================================================== */

export const categoryData: Category[] = [
  {
    id: 1,
    title: "Programming",
    courses: "120+ Courses",
    icon: Laptop,
    color: "bg-blue-50 text-blue-600",
  },

  {
    id: 2,
    title: "Engineering",
    courses: "85+ Courses",
    icon: GraduationCap,
    color: "bg-indigo-50 text-indigo-600",
  },

  {
    id: 3,
    title: "Medical",
    courses: "60+ Courses",
    icon: Microscope,
    color: "bg-red-50 text-red-500",
  },

  {
    id: 4,
    title: "Commerce",
    courses: "75+ Courses",
    icon: Calculator,
    color: "bg-green-50 text-green-600",
  },

  {
    id: 5,
    title: "Law",
    courses: "40+ Courses",
    icon: Scale,
    color: "bg-orange-50 text-orange-600",
  },

  {
    id: 6,
    title: "Management",
    courses: "35+ Courses",
    icon: BriefcaseBusiness,
    color: "bg-purple-50 text-purple-600",
  },

  {
    id: 7,
    title: "Government Exams",
    courses: "90+ Courses",
    icon: Landmark,
    color: "bg-cyan-50 text-cyan-600",
  },

  {
    id: 8,
    title: "School Learning",
    courses: "150+ Courses",
    icon: BookOpen,
    color: "bg-pink-50 text-pink-600",
  },
];