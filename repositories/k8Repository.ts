

let token = " eyJhbGciOiJSUzI1NiIsImtpZCI6InlHQmdCYURjSjh2Mk5CUWdwNkxxNEdndnJSVnpzeTYzVDNXVEFnWmFZOTAifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjIl0sImV4cCI6MTcyNzczNTAyNCwiaWF0IjoxNzI3NzMxNDI0LCJpc3MiOiJodHRwczovL2t1YmVybmV0ZXMuZGVmYXVsdC5zdmMiLCJqdGkiOiI4MTU0NWVlOC1kMmYwLTQzYWMtYjE1Ni1hYWI0YjYyNjMxYmUiLCJrdWJlcm5ldGVzLmlvIjp7Im5hbWVzcGFjZSI6ImRlZmF1bHQiLCJzZXJ2aWNlYWNjb3VudCI6eyJuYW1lIjoiZGVmYXVsdCIsInVpZCI6Ijk3NmIwOWJmLTYxM2QtNGNmMS05MzQ1LTIyMjExYTg2MmU5MSJ9fSwibmJmIjoxNzI3NzMxNDI0LCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6ZGVmYXVsdDpkZWZhdWx0In0.SrlGZ88nJs4hsfd_C1Gq2UMtk6sU1gLt3otIQo9zJh_yHdnXeeTCZBBsNxmTfgdsLwDvVC3gFkxPR0_88u2tvHy0EHUvaXE0TuECxSHJlTS7lzEiK8wy13sU8hXbhrFthpiEMUJR5NKYzwhx9dDDpcmiIjbJQqGRqT3alfWf2Kvn87k5nG3SAmc_GpQc4mG6ECzD3QkX_Dhrv8wuv-Kda8bsZHL38dTjonX6iKhDi8ZWCORzx0Ot52bGawldUgZcbcNgmVlTtV67VWs2CoTmTWI9FleYfmPQ7oDc28aEdELXbTubGun5GVGnZZhzN8nu2R0kNJEFUUzox1lpbCeA_Q"

function genHeaders(k8s_token:string) {
    return {
        'Content-Type': 'application/json',
        'Authorization ': `Bearer ${k8s_token}`
    }
}


export async function getNodes() {
    let headers = genHeaders(token)
    let results = await fetch('https://127.0.0.1:16443/api/v1/nodes', {
        method: 'GET',
        headers: headers
    })

    let data = await results.json()

    if (data.items) {
        return data.items
    }

    return []
}

