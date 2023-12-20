import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import { styled } from "@mui/material/styles";

const ByfeatureWrap = styled(Box)(() => ({
	width: "60%",
  borderTop: "1px solid #CCC",
  marginTop: "40px",
  paddingTop: "20px"
}));

export default function Byfeature() {
	const [show, setShow] = React.useState(false);

	const toggleShow = () => {
		setShow(!show);
	};

  return (
		<ByfeatureWrap>
		<Typography
			variant="p"
			component="p"
			sx={{mb: 1, fontSize: "20px"}}
			color='#000'
			fontWeight={700}
		>
			By feature
		</Typography>
		<Stack direction='row' alignItems='center' justifyContent='space-between'>
			<Typography
				variant="p"
				component="p"
				sx={{mt: 1, fontSize: "14px"}}
				color='#000'
			>
				Cord length
			</Typography>
			<Stack direction='row' alignItems='center'>
				<Rating
					name="simple-controlled"
					size="small"
					readOnly
					value={0}
					precision={0.5}
				/>
				<Typography
					variant="p"
					component="p"
					sx={{ml: 1, fontSize: "14px"}}
					color='#000'
				>
					0
				</Typography>
				</Stack>
			</Stack>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
			<Typography
				variant="p"
				component="p"
				sx={{mt: 1, fontSize: "14px"}}
				color='#000'
			>
				Sturdiness
			</Typography>
			<Stack direction='row' alignItems='center'>
				<Rating
					name="simple-controlled"
					size="small"
					readOnly
					value={0}
					precision={0.5}
				/>
				<Typography
					variant="p"
					component="p"
					sx={{ml: 1, fontSize: "14px"}}
					color='#000'
				>
					0
				</Typography>
				</Stack>
			</Stack>
			<Stack direction='row' alignItems='center' justifyContent='space-between'>
			<Typography
				variant="p"
				component="p"
				sx={{mt: 1, fontSize: "14px"}}
				color='#000'
			>
				Durability
			</Typography>
			<Stack direction='row' alignItems='center'>
				<Rating
					name="simple-controlled"
					size="small"
					readOnly
					precision={0.5}
					value={0}
				/>
				<Typography
					variant="p"
					component="p"
					sx={{ml: 1, fontSize: "14px"}}
					color='#000'
				>
					0
				</Typography>
				</Stack>
			</Stack>
			{
				show ? (
					<>
						<Stack direction='row' alignItems='center' justifyContent='space-between'>
						<Typography
							variant="p"
							component="p"
							sx={{mt: 1, fontSize: "14px"}}
							color='#000'
						>
							Value for money
						</Typography>
						<Stack direction='row' alignItems='center'>
							<Rating
								name="simple-controlled"
								size="small"
								readOnly
								precision={0.5}
								value={0}
							/>
							<Typography
								variant="p"
								component="p"
								sx={{ml: 1, fontSize: "14px"}}
								color='#000'
							>
								0
							</Typography>
							</Stack>
						</Stack>
						<Stack direction='row' alignItems='center' justifyContent='space-between'>
						<Typography
							variant="p"
							component="p"
							sx={{mt: 1, fontSize: "14px"}}
							color='#000'
						>
							Quality of material
						</Typography>
						<Stack direction='row' alignItems='center'>
							<Rating
								name="simple-controlled"
								size="small"
								readOnly
								precision={0.5}
								value={0}
							/>
							<Typography
								variant="p"
								component="p"
								sx={{ml: 1, fontSize: "14px"}}
								color='#000'
							>
								0
							</Typography>
							</Stack>
						</Stack>
						<Stack direction='row' alignItems='center' justifyContent='space-between'>
						<Typography
							variant="p"
							component="p"
							sx={{mt: 1, fontSize: "14px"}}
							color='#000'
						>
							Versatility
						</Typography>
						<Stack direction='row' alignItems='center'>
							<Rating
								name="simple-controlled"
								size="small"
								readOnly
								precision={0.5}
								value={0}
							/>
							<Typography
								variant="p"
								component="p"
								sx={{ml: 1, fontSize: "14px"}}
								color='#000'
							>
								0
							</Typography>
							</Stack>
						</Stack>
					</>
				) : null
			}
			<Typography
			variant="p"
			component="p"
			sx={{mt: 1, cursor: "pointer"}}
			color='#007185'
			onClick={toggleShow}
		>
			See {show ? "less" : "more" }
		</Typography>
		</ByfeatureWrap>
  );
}
