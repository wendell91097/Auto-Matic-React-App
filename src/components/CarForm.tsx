import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseNickname, chooseMake, chooseModel, chooseColor, chooseYear, chooseOwner } from '../redux/slices/rootSlice';

interface CarFormProps {
  id?: string[],
}

function CarForm( props: CarFormProps ) {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = ( data: any, event: any) => {
    console.log(`ID: ${props.id}`);
    if(props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${data.nickname} , ${props.id}`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseNickname(data.nickname));
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseColor(data.color));
      dispatch(chooseYear(data.year));
      dispatch(chooseOwner(data.owner));


      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 500);
    }
  }

  return (
      <form onSubmit={ handleSubmit(onSubmit) } className="col w-full"> 
        <div className="flex flex-row justify-evenly w-full">
          <div className="col p-2">
            <div>
              <label htmlFor="nickname">Car nickname</label>
              <Input {...register('nickname')} name='nickname' placeholder="Nickname"/>
            </div>
            <div>
              <label htmlFor="make">Make</label>
              <Input {...register('make')} name='make' placeholder="Make"/>
            </div>
            <div>
              <label htmlFor="address">Model</label>
              <Input {...register('model')} name='model' placeholder="Model"/>
            </div>
          </div>
          <div className="col p-2">
            <div>
              <label htmlFor="color">Color</label>
              <Input {...register('color')} name='color' placeholder="Color"/>
            </div>
            <div>
              <label htmlFor="year">Year</label>
              <Input {...register('year')} name='year' placeholder="Year"/>
            </div>
            <div>
              <label htmlFor="owner">Owner</label>
              <Input {...register('owner')} name='owner' placeholder="Owner"/>
            </div>
          </div>
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-black hover:text-white">
            Submit
          </button>
        </div>
      </form>
  )
}

export default CarForm