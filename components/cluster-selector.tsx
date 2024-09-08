import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Cluster } from "@/constants/data"



interface ClusterSelectorProps  {
  clusters: Cluster[]
}


export function ClusterSelector({clusters}: ClusterSelectorProps) {
  return (
    <div className="pl-4">
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Cluster" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cluster</SelectLabel>

          {
            clusters.map((cluster: Cluster) =>
                <SelectItem value={cluster.id.toString()}>{cluster.name}</SelectItem>
            )
          }

        </SelectGroup>
      </SelectContent>
    </Select>
    <hr className="mt-4"></hr>
    </div>
  )
}
