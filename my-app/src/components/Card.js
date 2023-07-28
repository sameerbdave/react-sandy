
import {useState} from 'react';
import UploadForm from './UploadForm';
const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

const Card = () => {
  const [input, setInput] = useState()
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);

  const toggle = () => collapse(!isCollapsed);

  const handleOnChnage = (e) => setInput(e.target.value)
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([input,...items])
  }

  return (
    <div className="container text-center">
       <button className='btn btn-warning float-end mt-5' onClick={toggle}>{isCollapsed ? 'Close': '+Add'}</button>
       <div className='clearfix'></div>
       <UploadForm 
       isVisible ={isCollapsed} 
       onChange = {handleOnChnage}
       onSubmit = {handleOnSubmit}
       />
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