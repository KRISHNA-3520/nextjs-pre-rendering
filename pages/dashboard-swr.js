import useSwr from 'swr'

const fetcher=async()=>{
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data
}

function DASHBOARDSWR(){
   const {data,error} = useSwr('dashboard',fetcher)

    if(error)return 'An error occured'
    if(!data) return 'Loading..'

    return (
        <div>
          <h1>DASHBOARD</h1>
          <h1>Post={data.posts}</h1>
          <h1>Likes={data.likes}</h1>
          <h1>Followers={data.followers}</h1>
          <h1>Following={data.following}</h1>
        </div>
      )

}

export default DASHBOARDSWR