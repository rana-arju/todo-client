import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const Complate = () => {
     const { isLoading, error, data:complated, refetch} = useQuery('lists', () =>
     fetch("https://immense-castle-15525.herokuapp.com/todo/complate", {
         method: "GET",
          headers: {
            'content-type': 'application/json',
          }
     }).then(res =>res.json())
   )
    if(isLoading){
        return <Loading />
    }
    if(error){
        return toast.error(error.message);
    }
    refetch();
    return (
         <div className="h-1/2 w-full md:w-1/2 mx-auto my-3 md:my-10 bg-base-200">
            <div className="text-center">
            <div className="min-w-lg">
                <div className="card  w-full shadow-2xl bg-base-100">
                    <div className="card-body mx-8">
                        {
                            complated?.map(list => <div key={list._id }  className="form-control">
                        <label className="gap-2 md:gap-5 flex cursor-pointer">
                            <span><input type="checkbox" checked="checked" className="checkbox checkbox-primary" /></span>
                            <span className="text-lg md:text-xl line-through">{list.todo}</span> 
                        </label>
                        </div>)
                        }
                    
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Complate;