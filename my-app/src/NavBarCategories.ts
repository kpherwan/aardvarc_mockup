export interface URLMapping {
  readonly url: string;
  readonly label: string;
}
export interface NavBarCategories {
  readonly title: string;
  readonly urls: URLMapping[];
}

export const navBarCategories: NavBarCategories[] = [
  {
    title: "Courses",
    urls: [
      {
        url: "/courses_and_completion",
        label: "Courses & Completion Status",
      },
      {
        url: "/",
        label: "Add & Manage Existing Courses",
      },
    ],
  },

  {
    title: "Instructors",
    urls: [
      {
        url: "/",
        label: "Instructors & Appointments",
      },
    ],
  },

  {
    title: "Review",
    urls: [
      {
        url: "/",
        label: "Peer Teaching",
      },
      {
        url: "/",
        label: "Individual Development Plan",
      },
      {
        url: "/",
        label: "Consolidated Merit Review",
      },
    ],
  },

  {
    title: "Experiential",
    urls: [
      {
        url: "/",
        label: "Preceptors & Appointments",
      },
      {
        url: "/",
        label: "Experiential Sites & Worksites",
      },
      {
        url: "/",
        label: "Worksite Requests",
      },
    ],
  },

  {
    title: "Reports",
    urls: [
      {
        url: "/",
        label: "Syllabus Search",
      },
      {
        url: "/",
        label: "Limited Engagement",
      },
      {
        url: "/",
        label: "Parking Requests",
      },
      {
        url: "/",
        label: "Learning Experience Evaluation",
      },
      {
        url: "/",
        label: "Contact Info Completion",
      },
    ],
  },

  {
    title: "Settings",
    urls: [
      {
        url: "/",
        label: "Email Templates",
      },
    ],
  },
];
