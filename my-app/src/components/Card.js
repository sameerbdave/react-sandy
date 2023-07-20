const photos = [
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200'
]

const Card = () => {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Gallery</h1>
      <div className="row mt-5">
        {photos.map((photo) => {
          return (
            <div className='col-md-4'>
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