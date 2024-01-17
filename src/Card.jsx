import React, { useState } from 'react';
import { AiOutlineMail,AiOutlinePhone  } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { IoMdHeartEmpty,IoMdHeart } from "react-icons/io";
import { CiEdit} from "react-icons/ci";
import photo from './photo.png'

const Card=({id,name,mail,phone,web,
  onDelete,
  handleUpdate,
  setName,
  setPhone,
  setEmail,
  setWeb,
  newName,newWeb,newPhone,newEmail
})=>{
     const [like,setLike]=useState(true);
     const[modalOpen,setModalOpen]=useState(false);
     
const isDisabled=()=>{
  if(newName.trim()===""||newWeb.trim()===""||newEmail.trim()===""||newPhone.trim()==="")
  return true
return false
}
    

    const openModal=()=>{
        setModalOpen(true);
        setName(name)
        setEmail(mail)
        setPhone(phone)
        setWeb(web)
        document.body.style.overflow='hidden';
    }

    const closeModal=()=>{
        setModalOpen(false)
        document.body.style.overflow='auto';
    }
    const handleOk=(id)=>{
      handleUpdate(id);
      closeModal()
    }

    
    const onLike=()=>setLike(prevLike=>!prevLike);
    return(
    
      <div className="card">
        <div className='top'><img src={photo} alt='profile'/></div>
        <div className='bottom'>
        <h3>{name}</h3>
        <div className='container-icon'><div className='icon'><AiOutlineMail size={20}/></div><div className='data'><p>{mail}</p></div></div>
        <div className='container-icon'><div className='icon'><AiOutlinePhone  size={20} /></div><div className='data'><p>{phone}</p></div></div>
        <div className='container-icon'><div className='icon'><IoIosGlobe size={20} /></div><div className='data'><p>{web}</p></div></div>
      
        </div>
        <div className='buttons-container'>
    <div className='btn1'><button className='heartbtn' onClick={onLike} >{like?<IoMdHeartEmpty size={25} style={{fill:'red'}}/>
    :<IoMdHeart size={25} style={{fill:'red'}} />
    }</button></div>
    <div className='btn2'><CiEdit onClick={openModal} size={25} style={{marginTop:"2px"}}/></div>
    <div className='btn3'><RiDeleteBin7Fill onClick={()=>onDelete(id)} size={25} style={{marginTop:"2px"}}/></div>
        </div>

        {modalOpen && (
      <div className='modal'>
      <div className='modal-content'>
        <div className='modal-top'>
          <p>Basic Modal<span className='close' onClick={closeModal}>X</span></p>
      </div>
      <div className='modal-mid'>
      <div className='fields'><div className='left'><span>*</span><label>Name:</label></div>
        <div className='right'><input type='text'
        name='name'
        required
        defaultValue={name}
        onChange={(newValue)=>setName(newValue.target.value)}
        />
        {newName.trim()==="" ?<p style={{color:'red',margin:'0'}}>{"This field is required"}</p>:null}
        </div></div>

        <div className='fields'> <div className='left'><span>*</span><label>Email:</label></div>
        <div className='right'><input type='text'
        name='email'
        required
        defaultValue={mail}
        onChange={(newValue)=>setEmail(newValue.target.value)}

        /> {newEmail.trim()==="" ?<p style={{color:'red',margin:'0'}}>{"This field is required"}</p>:null}
        </div></div>

        <div className='fields'><div className='left'><span>*</span> <label>Phone:</label></div>
        <div className='right'><input type='phone'
        name='phone'
        required
        defaultValue={phone}
        onChange={(newValue)=>setPhone(newValue.target.value)}
        /> {newPhone.trim()==="" ?<p style={{color:'red',margin:'0'}}>{"This field is required"}</p>:null}
        </div></div>

        <div className='fields'><div className='left'><span>*</span> <label>Website:</label></div>
        <div className='right'><input type='website'
        name='website'
        required
        defaultValue={web}
        onChange={(newValue)=>setWeb(newValue.target.value)}
        /> {newWeb.trim()==="" ?<p style={{color:'red',margin:'0'}}>{"This field is required"}</p>:null}
        </div></div>
      </div>

      

       <div className='modal-bottom'>
       <button className='ok' onClick={()=>handleOk(id)} disabled={isDisabled()} >OK</button>
         <button className='cancel' onClick={closeModal}>Cancel</button> 
       </div>

       </div>
      </div>
  )}
  
      </div>)
}

    export default Card