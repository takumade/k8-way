import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable,
  } from 'kysely'
  
  export interface Database {
    cluster: ClusterTable
  }

  export interface ClusterTable {

    id: Generated<number>  
    name: string
    api: string
    description: string
    created_at: ColumnType<Date, string | undefined, never>
    updated_at: ColumnType<Date, string | undefined, never>
  }
  
  
  export type Cluster = Selectable<ClusterTable>
  export type NewCluster = Insertable<ClusterTable>
  export type ClusterUpdate = Updateable<ClusterTable>
  