import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
	display: flex;
	gap: 24px;
`;

const Content = styled.div`
	flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 18px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
	flex: 2;
`;
const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	gap: 20px;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 14px;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width="100%"
						height="720"
						src="https://www.youtube.com/embed/aFTqpRRNniw?si=zcereGAQX3Kw8aIP"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>F1 race full</Title>
				<Details>
					<Info>7,948,154 views • Jun 22, 2022</Info>
					<Buttons>
						<Button>
							<ThumbUpOutlinedIcon /> 123
						</Button>
						<Button>
							<ThumbDownOffAltOutlinedIcon /> Dislike
						</Button>
						<Button>
							<ReplyOutlinedIcon /> Share
						</Button>
						<Button>
							<AddTaskOutlinedIcon /> Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src="https://traxion.gg/wp-content/uploads/2024/06/20240526-F1-24-11.jpg" />
						<ChannelDetail>
							<ChannelName>Shahir Adil Sizan</ChannelName>
							<ChannelCounter>200K subscribers</ChannelCounter>
							<Description>
								All about F1 gameplay videos
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>SUBSCRIBE</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
			<Recommendation>
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
			</Recommendation>
		</Container>
	);
};

export default Video;
