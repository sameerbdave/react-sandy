
import {useState, useEffect} from 'react';
import UploadForm from './UploadForm';
const photos = [
  'https://picsum.photos/id/1001/200/200',
  // 'https://picsum.photos/id/1002/200/200',
  // 'https://picsum.photos/id/1003/200/200',
  // 'https://picsum.photos/id/1004/200/200',
  // 'https://picsum.photos/id/1005/200/200',
  // 'https://picsum.photos/id/1006/200/200'
]

const Card = () => {
  const [count, setCount] = useState()
  const [input, setInput] = useState({title: null, file: null, path:null})
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const toggle = () => collapse(!isCollapsed);

  const handleOnChnage = (e) => {
    if(e.target.name === 'file'){
      setInput({...input, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
    } else{
      setInput({...input, title: e.target.value})
    }
    //setInput({title: e.target.vaule, file: e.target.files[0], path: URL.createObjectURL(e.target.files[0])})
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([input.path,...items])
    setInput({title: null, file: null, path:null})
    collapse(false)
  }

  useEffect(() =>{
    setCount(`you have ${items.length} image${items.length > 1 ? 's': ''}`)
  },[items])

  
  return (
    <div className="container text-center">
       <button className='btn btn-warning float-end mt-5' onClick={toggle}>{isCollapsed ? 'Close': '+Add'}</button>
       <div className='clearfix'></div>
       <UploadForm 
       input = {input}
       isVisible ={isCollapsed} 
       onChange = {handleOnChnage}
       onSubmit = {handleOnSubmit}
       />
       {count}
      <h1 className="mt-5">Gallery</h1>
      {/* <button className='btn btn-primary me-2' onClick={()=> setItems(['https://picsum.photos/id/1008/200/200', ...items])}>+ Add Images</button> */}
     
     
      <div className="row mt-5">
        {items.map((photo, index) => {
          return (
            <div className='col-md-4' key={index}>
              <div class="card mb-4">
                <img src={photo} class="card-img-top" alt={photo} />
                
              </div>
            </div>
          )
        })
        }

        {/* {Array.apply(null, {length:10}).map((a,index) =>{
          return(
            <div>{index}1</div>
          )
        })} */}
      </div>
    </div>
  )
}
export default Card;