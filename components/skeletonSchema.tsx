import { Skeleton } from "./ui/skeleton";

type SkeletonSchema ={
    grid:number
}
const SkeletonSchema = (props: SkeletonSchema) => {
    const{grid} = props;
    return (
        Array.from ({length:grid}).map((_,index)=>(
            <div key= {index}className="felx flex-col gap-8 mx-auto space-y-3">

                <Skeleton className="h-[125px] w-[250px] roundex-xl"/>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[250px]"/>
                        

                </div>
            </div>
        ))
    );
  };
  
  export default SkeletonSchema;
  