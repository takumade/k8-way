import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};


export type Cluster = {
 id: number;
 name: string;
 api: string; 
 token: string;
}


export const clusters: Cluster[] = [

  {
    id: 1, 
    name: "Eagle Cluster",
    api: 'eagle.cluster-xyz.com',
    token: "ejy...."
  },
  {
    id: 2, 
    name: "Snake Cluster",
    api: 'snake.cluster-xyz.com',
    token: "ejy...."
  },
  {
    id: 3, 
    name: "Leopard Cluster",
    api: 'leopard.cluster-xyz.com',
    token: "ejy...."
  },
  {
    id: 4, 
    name: "Ant Cluster",
    api: 'ant.cluster-xyz.com',
    token: "ejy...."
  }
]


export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'User',
    href: '/dashboard/user',
    icon: 'user',
    label: 'user'
  },
  {
    title: 'Clusters',
    href: '/dashboard/clusters',
    icon: 'clusters',
    label: 'clusters'
  },
  {
    title: 'Services',
    href: '/dashboard/services',
    icon: 'services',
    label: 'services',
    isResource: true
  },
  {
    title: 'Resources',
    href: '/dashboard/user',
    icon: 'resources',
    label: 'resources',
    children: [
      {
        title: 'Nodes',
        href: '/dashboard/resources/nodes',
        icon: 'user',
        label: 'nodes',
        isResource: true
      },
      {
        title: 'Pods',
        href: '/dashboard/resources/pods',
        icon: 'user',
        label: 'pods',
        isResource: true
      },
      {
        title: 'Deployments',
        href: '/dashboard/resources/deployments',
        icon: 'user',
        label: 'deployments',
        isResource: true
      },
      {
        title: 'Namespaces',
        href: '/dashboard/resources/namespaces',
        icon: 'user',
        label: 'namespaces',
        isResource: true
      },
      {
        title: 'Volumes',
        href: '/dashboard/resources/volumes',
        icon: 'user',
        label: 'volumes',
        isResource: true
      },
    ]
  },
  // {
  //   title: 'Employee',
  //   href: '/dashboard/employee',
  //   icon: 'employee',
  //   label: 'employee'
  // },
  // {
  //   title: 'Profile',
  //   href: '/dashboard/profile',
  //   icon: 'profile',
  //   label: 'profile'
  // },
  // {
  //   title: 'Kanban',
  //   href: '/dashboard/kanban',
  //   icon: 'kanban',
  //   label: 'kanban'
  // },
  // {
  //   title: 'Login',
  //   href: '/',
  //   icon: 'login',
  //   label: 'login'
  // }
];
