import React from 'react'
import Card from '@mui/material/Card';

type Props = {}

export default function Title({mycourse}:any) {
  return (
    <div>
      <Card elevation={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
        <h2>{mycourse}</h2>
        <h2>video</h2>
        </Card>
    </div>
  )
}