import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";

export const speakerColoredGradients = [
    "linear-gradient(90deg, #48C6EF 0%, #6F86D6 100%)",
    "linear-gradient(90deg, #505285 0%, #585E92 12%, #65689F 25%)",
    "linear-gradient(90deg, #ED6EA0 0%, #EC8C69 100%)",
    "linear-gradient(90deg, #0BA360 0%, #3CBA92 100%)",
    "linear-gradient(90deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)",
    'linear-gradient(90deg, #F857A6 0%, #FF5858 100%)',
    'linear-gradient(90deg, #BF5AE0 0%, #A811DA 100%)',
    'linear-gradient(90deg, #DA22FF 0%, #9733EE 100%)',
    'linear-gradient(90deg, #DD5E89 0%, #F7BB97 100%)',
    'linear-gradient(90deg, #00D2FF 0%, #3A7BD5 100%)',
    'linear-gradient(90deg, #FE8C00 0%, #F83600 100%)',
]

export const AvatarName : React.FC<AvatarNameProps> = (props)  => {
    const { name, overlap, index, attendeesGradientColors:  attendeesGradientColorsProps} = props;
    const attendeesGradientColors = !!attendeesGradientColorsProps ? attendeesGradientColorsProps : [];
    const gradientColors = attendeesGradientColors?.length > 0 ? attendeesGradientColors : speakerColoredGradients;
    const length = gradientColors.length - 1;
    const background = index > -1 ? gradientColors[index] : gradientColors[Math.floor(Math.random() * length)]

    return (<Avatar sx={{ background, width: "20px", height: "20px", marginRight: `${overlap ? "-3.5px" : "4px"}`}}>
        <Typography sx={{ color: 'white', fontWeight: '600', fontSize: '0.75rem'}}>
            {(name && name[0]) || 'A'}
        </Typography>
    </Avatar>)
}
interface AvatarNameProps {
    name: string,
    overlap: boolean,
    index: number,
    attendeesGradientColors?: string[]
}
export default AvatarName;