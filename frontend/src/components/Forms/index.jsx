import CreateRoomForm from './CreateRoomForm';
import './index.css';
import JoinRoomForm from './JoinRoomForm';
const Forms = ({uuid,socket,setUser})=>{
    return(
        <div className="row h-100 pt-5">
            <h1 className='align-items-center' style={{textAlign:'center'}}><i>DrawCharades</i></h1>
            <div className="col-md-4 mt-5 form-box p-5 border border-primary rounded-2 mx-auto d-flex align-items-center flex-column ">
                <h1 className='text-primary fn-bold'>Join room</h1>
                <JoinRoomForm  uuid = {uuid} socket={socket} setUser={setUser}></JoinRoomForm>
            </div>
            <div className="col-md-4 mt-5 form-box  p-5 border border-primary  rounded-2 mx-auto d-flex align-items-center flex-column">
            <h1 className='text-primary fn-bold'>create room</h1>
            <CreateRoomForm uuid={uuid} socket={socket} setUser={setUser}></CreateRoomForm>
            </div>
        </div>
    )
}
export default Forms;