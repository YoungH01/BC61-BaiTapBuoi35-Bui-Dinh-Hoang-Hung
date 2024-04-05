import React from 'react'
import {connect} from 'react-redux'
import ThongTinDatGhe from './ThongTinDatGhe';
// let count=0;
function ThongTinHangGhe(props) {
  const renderViTriGhe=()=>{
     return props.HangGhe.danhSachGhe.map((Ghe,index)=>{
      let cssGheDuocChon='';
      let disabled=false;
      if(Ghe.daDat){
        cssGheDuocChon='gheDuocChon';
        disabled=true;
      }
      let cssGheDangDat='';
      let indexGheDangDat= props.DanhSachGheDangChon.findIndex(gheDangDat=>gheDangDat.soGhe===Ghe.soGhe);
      if(indexGheDangDat!==-1){
        cssGheDangDat='gheDangChon';
      }
      return <button onClick={()=>{props.datGhe(Ghe)}} disabled={disabled} className={`ghe ${cssGheDuocChon} ${cssGheDangDat}`} key={index}>{index+1}</button>
    });
  }
  const renderSoHang=()=>{
    return props.HangGhe.danhSachGhe.map((item,index)=>{
      return <button className='rowNumber'>{item.soGhe}</button>
    })
  }
  const renderSoGhe=()=>{
    if(props.ShoGhe==0){
      return <div className='ml-5'>
                {props.HangGhe.hang}
                {renderSoHang()}
              </div>
    }else{
      return <div>
                {props.HangGhe.hang}
                {renderViTriGhe()}
            </div>
    }
  }
  return (
      <div className="text-light text-left mt-3 ml-5" style={{fontSize:'30px'}}>
        {renderSoGhe()}
      </div>
  )
}
const mapStateToProps=state=>{
  return {
    DanhSachGheDangChon:state.watchMovieReducer.DanhSachGheDangChon
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    datGhe:(Ghe)=>{
      dispatch({
        type:'Chon_Ghe',
        Ghe:Ghe
      })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ThongTinHangGhe)