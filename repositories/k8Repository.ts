'use server'



import fetch from 'node-fetch'

import https from 'https'


function generateHeaders(k8s_token:string) {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${k8s_token}`
    }
}

interface Cluster {
    endpoint: string
    token: string
}

const myCluster:Cluster = {
    endpoint: "127.0.0.1:16443",
    token:  "eyJhbGciOiJSUzI1NiIsImtpZCI6InlHQmdCYURjSjh2Mk5CUWdwNkxxNEdndnJSVnpzeTYzVDNXVEFnWmFZOTAifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjIl0sImV4cCI6MTcyNzc0MTkwMCwiaWF0IjoxNzI3NzM4MzAwLCJpc3MiOiJodHRwczovL2t1YmVybmV0ZXMuZGVmYXVsdC5zdmMiLCJqdGkiOiI5YjczNTNiNC0zYTI5LTRmZDEtYmYyMC0wNzRkMDQxOTU1YzciLCJrdWJlcm5ldGVzLmlvIjp7Im5hbWVzcGFjZSI6ImRlZmF1bHQiLCJzZXJ2aWNlYWNjb3VudCI6eyJuYW1lIjoiZGVmYXVsdCIsInVpZCI6Ijk3NmIwOWJmLTYxM2QtNGNmMS05MzQ1LTIyMjExYTg2MmU5MSJ9fSwibmJmIjoxNzI3NzM4MzAwLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6ZGVmYXVsdDpkZWZhdWx0In0.sBvOlWvSQUuSRJKUUWtP4GxdQY62BsFDjvlw63Qyy-kyoqMe0Ky5OFj_uBepvIDBGWy4FKBMjriiIjgpADyIdO_hhwG7n6jUo2hGJN0ULTClCR63NGLEJq6uPEVEcE9LBnGtyNIiHt8dyYdzx7ZzP_SRxynoGQCHbmWSV_aeV53sdzrzd4t8FEDhCtkdGiHDUYBgz1FqVhtDP0weQxFx6UyU8xGTR5ligQwbOhv5w77zRkyYKYy5rR0os6DEqN82NW4pFa0mFSHG8acgzdRYSP-WwSpI_6YQLgAtwSpB6GReG7mHha92OEP_o0QirFmOvmhdfF_DldmvEKycrddnRg"

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


export async function getNodes() {
    return await getResource(myCluster, 'nodes')
}

export async function getServices() {
    return await getResource(myCluster, 'services')
}


export async function getPods() {
    return await getResource(myCluster, 'pods')
}

export async function getDeployments() {
    return await getResource(myCluster, 'deployments', '', 'apps_v1')
}

export async function getNamespaces() {
    return await getResource(myCluster, 'namespaces', '')
}

export async function getVolumes() {
    return await getResource(myCluster, 'persistentvolumes', '')
}


