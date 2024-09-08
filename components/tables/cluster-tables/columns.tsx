'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action'
import { Cluster } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<Cluster>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'api',
    header: 'API'
  },
  {
    accessorKey: 'token',
    header: 'TOKEN',
    cell: (props) => (
      //@ts-ignore
      <span>{props.getValue().substr(0, 20)}...</span>
    )

  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
