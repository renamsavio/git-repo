import React from 'react';
import styled from 'styled-components/native';

import {Text, Image} from '../shared';

export const Item = (props) => {
	return (	
	   	<WrapperInfo>
	   		<WrapperCotent>
		   		<WrapperAvatar>
		   			<Avatar source={{uri: props.data.owner.avatar_url}}/>
		   		</WrapperAvatar>
		   		<WrapperDescription>
		   			<Text size={16} weight="700">{props.data.name}</Text>
		   			<Text size={14} secondary>{props.data.description}</Text>	
		   		</WrapperDescription>
	   		</WrapperCotent>
		</WrapperInfo> 
  );
}


const WrapperInfo = styled.View`
	margin-top: 5;
	margin-bottom: 5;
`;

const Avatar = Image.extend`
	width: 50;
	height: 50;
	border-radius: 25;
`;

const WrapperAvatar = styled.View`
	padding-right: 10;
`;

const WrapperCotent = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
    padding-left: 10;
	padding-right: 10;
	padding-top: 10;
	padding-bottom: 10;
`;
const WrapperDescription = styled.View`
	flex-wrap: wrap;
    flex: 1;
`;