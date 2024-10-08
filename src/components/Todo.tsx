import { useTodosIds} from "../services/queries"

export default function Todo(){
    const todosIdsQuery = useTodosIds();

    if(todosIdsQuery.isPending){
        return <span>loading....</span>
    }

    if(todosIdsQuery.isError){
        return <span>There is an error</span>
    }

    return( 
    <>
        {todosIdsQuery.data.map((id)=>(
            <p key={id}>{id}</p>
        ))}
    </>
    )
}