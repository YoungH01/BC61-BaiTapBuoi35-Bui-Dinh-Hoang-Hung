import React from 'react'
import './BaiTapBookingTicket.css'
import danhSachGhe from './../data/danhSachGhe.json'
import ThongTinDatGhe from './ThongTinDatGhe'
import ThongTinHangGhe from './ThongTinHangGhe'
function WatchMovie() {
  const renderHangGhe=()=>{
    return danhSachGhe.map((HangGhe,index)=>{
      return <div key={index}>
        <ThongTinHangGhe HangGhe={HangGhe} SoGhe={index}/>
      </div>
    })
  }
  return (
    <div className="imgBackGround" style={{backgroundImage:"url('./img/bgmovie.jpg')"}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 text-center">
            <div className="display-4 text-warning">Booking Ticket YoungHGroup </div>
            <div className='mt-3 text-light' style={{fontSize:'25px'}}>Screen</div>
            <div className="mt-2" style={{flexDirection:'row',display:'flex',justifyContent:'center'}}>
              <div className="screen"></div>
            </div>
            <div>
              {renderHangGhe()}
            </div>
          </div>
          <div className="col-4">
            <div className="text-light" style={{fontSize:"35px"}}>Ghế Bạn Chọn</div>
              <ThongTinDatGhe/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchMovie
