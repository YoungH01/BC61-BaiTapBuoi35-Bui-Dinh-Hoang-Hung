import React from 'react'
import { connect } from 'react-redux'
function ThongTinDatGhe(props) {
  const calculatePrice=()=>{
    let totalPrice=0;
    props.DanhSachGheDangChon.map((item,index)=>{
      totalPrice+=item.gia;
    })
    return <tr style={{ fontSize: '20px' }}>
            <td>Tổng tiền</td>
            <td style={{color:'orange'}}>{totalPrice}</td>
            <td></td>
          </tr>
  }
  return (
    <div>
      <div>
        <button className="gheDuocChon"></button>
        <span className="text-light" style={{ fontSize: '30px' }}>
          Ghế Đã Đặt
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-light" style={{ fontSize: '30px' }}>
          Ghế Đang Chọn
        </span>
        <br />
        <button className="ghe" style={{ marginLeft: 0 }}></button>
        <span className="text-light" style={{ fontSize: '30px' }}>
          Ghế Chưa Chọn
        </span>
      </div>
      <div>
        <table className="table table-dark table-bordered" style={{backgroundColor:'red'}}>
          <thead>
            <tr className='text-light' style={{ fontSize: '30px' }}>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Huỷ</th>
            </tr>
          </thead>
          <tbody className='text-warning'>
            {props.DanhSachGheDangChon.map((item, index) => {
              return <tr key={index} style={{ fontSize: '20px' }}>
                <td style={{color:'orange'}}>{item.soGhe}</td>
                <td style={{color:'orange'}}>{item.gia}</td>
                <td><button onClick={() => {
                  props.dispatch({
                    type: 'HUY',
                    soGhe: item.soGhe
                  })
                }}>Huỷ</button></td>
              </tr>
            })}
            {calculatePrice()}
          </tbody>
        </table>

      </div>
    </div>
  )
}

const mapStateToProps=state=>{
  return{
      DanhSachGheDangChon:state.watchMovieReducer.DanhSachGheDangChon
  }
}
export default connect(mapStateToProps)(ThongTinDatGhe);
