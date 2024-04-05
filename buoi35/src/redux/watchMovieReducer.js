const stateDefault={
    DanhSachGheDangChon:[
    ]
};
const watchMovieReducer=(state=stateDefault,action)=>{
    switch(action.type){
        case 'Chon_Ghe':{
            let UpdateDanhSachGheDangChon=[...state.DanhSachGheDangChon];
            let index=UpdateDanhSachGheDangChon.findIndex(item=>item.soGhe===action.Ghe.soGhe);
            if(index!==-1){
                UpdateDanhSachGheDangChon.splice(index,1);
            }else{
                UpdateDanhSachGheDangChon.push(action.Ghe);
            }
            state.DanhSachGheDangChon=UpdateDanhSachGheDangChon;
            return {...state};
        }
        case 'HUY':{
            let UpdateDanhSachGheDangChon=[...state.DanhSachGheDangChon];
            let index= UpdateDanhSachGheDangChon.findIndex(item=>item.soGhe===action.soGhe);
            if(index!==-1){
                UpdateDanhSachGheDangChon.splice(index,1);
            }
            state.DanhSachGheDangChon=UpdateDanhSachGheDangChon;
            return {...state};
        }
        default: return {...state};
    }
}
export default watchMovieReducer