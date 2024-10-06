'use server'

import fetch from 'node-fetch'
import https from 'https'
import { Cluster } from '@/types'
import { cookies } from 'next/headers'


function generateHeaders(k8s_token:string) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${k8s_token}`
    }
}


async function getClusterFromCookies(){

    let selectedCluster = cookies().get('selectedCluster')

    if (selectedCluster) {
        return JSON.parse(selectedCluster.value)
    }else {
        return null
    }
}

async function getNamespacesFromCookies(){
    
        let selectedNamespace = cookies().get('selectedNamespace')
    
        if (selectedNamespace) {
            return selectedNamespace.value
        }else {
            return null
        }
    }





async function getResource(cluster:Cluster, resource:string, namespace:string = "", api_type: string="api_v1" ) {
    let headers = generateHeaders(cluster.token)

    console.log("headers: ", headers)

    let apiVersion = api_type

    if (api_type === "api_v1") {
        apiVersion = "api/v1"
    }else if (api_type === "apps_v1") {
    apiVersion = "apis/apps/v1"
    } else if (api_type === "batch_v1") {
        apiVersion = "apis/batch/v1"
    } else if (api_type === "extensions_v1beta1") {
        apiVersion = "apis/extensions/v1beta1"
    }



    let resourceUrl = `https://${cluster.endpoint}/${apiVersion}/${resource}`

    if (namespace) {
        resourceUrl = `https://${cluster.endpoint}/${apiVersion}/namespaces/${namespace}/${resource}`
    }

    console.log("Resource URLs: ", resourceUrl)

    let results = await fetch(resourceUrl, {
        method: 'GET',
        headers: headers,
        agent: new https.Agent({
            rejectUnauthorized: false,
          })
        
    })

    let data:any = await results.json()

    console.log("Data x: ", data)

    if (data.items) {
        return data.items
    }

    return []
}


export async function getNodes(cluster: Cluster) {
    return await getResource(cluster, 'nodes')
}

export async function getServices(cluster: Cluster) {
    return await getResource(cluster, 'services')
}


export async function getPods(cluster: Cluster) {
    return await getResource(cluster, 'pods')
}

export async function getDeployments(cluster: Cluster) {
    return await getResource(cluster, 'deployments', '', 'apps_v1')
}

export async function getNamespaces(cluster: Cluster) {
    return await getResource(cluster, 'namespaces', '')
}

export async function getVolumes(cluster: Cluster) {
    return await getResource(cluster, 'persistentvolumes', '')
}


