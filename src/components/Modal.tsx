import CarForm from './CarForm';

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;

}
const Modal = ( props: Props) => {
    if( !props.open ) return (<></>);
    return (
        <div 
        onClick={props.onClose} 
        
        className='fixed w-full h-full flex overflow-auto
        z-10 justify-center align-middle bg-gray-300 bg-opacity-25'
        >
            <div className='max-w-600px w-1/2 fixed flex z-10 mt-20 bg-white shadow-xl rounded'
            onClick={(e) => {
                e.stopPropagation()
            }}
            >
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-apart">
                        <button className="flex justify-end m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="flex flex-row items-center text-left mt-1">
                        <CarForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal