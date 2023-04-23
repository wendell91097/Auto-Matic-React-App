export const server_calls = {
    get: async() => {
        const response = await fetch(`https://auto-matic-backend.glitch.me/api/cars`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':	'Bearer c071dd08c072c1e4a6eb3742d941a76df16213ef0f6816d2',
            },
        })   

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://auto-matic-backend.glitch.me/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':	'Bearer c071dd08c072c1e4a6eb3742d941a76df16213ef0f6816d2',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://auto-matic-backend.glitch.me/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer c071dd08c072c1e4a6eb3742d941a76df16213ef0f6816d2',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://auto-matic-backend.glitch.me/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'Bearer c071dd08c072c1e4a6eb3742d941a76df16213ef0f6816d2',
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}
