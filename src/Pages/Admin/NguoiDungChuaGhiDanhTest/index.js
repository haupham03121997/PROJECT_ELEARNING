import React,{useEffect}from 'react';
import {useDispatch} from "react-redux"
import {chuaghidanhaction} from "../../../Action/NguoiDungChuaGhiDanh"
export default function NguoiDungTest(props) {

    const {match} = props;
    console.log(match.params.maKhoaHoc);
    const maKhH = {
      maKhoaHoc: match.params.maKhoaHoc
    }
    console.log(maKhH);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(chuaghidanhaction(maKhH))
    } , [])
    return (
        <div>
            asdasdasdas
        </div>
    )
}
