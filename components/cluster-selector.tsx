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
import { useDispatch } from "react-redux"

import { useSelector } from "react-redux"
import { selectCluster } from "@/store/slices/clusterSlice"
import { setCurrentCluster } from "@/repositories/k8Repository"



interface ClusterSelectorProps  {
  clusters: Cluster[]
}


export function ClusterSelector({clusters}: ClusterSelectorProps) {

  const selectedCluster = useSelector((state: any) => state.cluster.selectedCluster)
  const dispatch = useDispatch()


  const handleChange = (value:string) => {
    console.log(value)

    let currentCluster:Cluster = clusters.find((cluster: Cluster) => cluster.id.toString() === value) as Cluster
    dispatch(selectCluster(selectedCluster))
    setCurrentCluster(currentCluster as any)

  }


  return (
    <div className="pl-4">

        <Select onValueChange={handleChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Cluster" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Cluster</SelectLabel>

          {
            clusters.map((cluster: Cluster, index) =>
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
