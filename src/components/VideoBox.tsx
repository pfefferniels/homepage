import { ReactNode } from "react";
import styled from "styled-components";

const VideoBoxContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;

    @media (min-width: 768px) {
        max-width: 80vw;
        flex-direction: row;
    }
    
    padding: 1rem;
`;

const VideoWrapper = styled.div`
    aspect-ratio: 16 / 9;
    width: 100%;
    
    @media (min-width: 768px) {
        flex: 7;
    }

    iframe {
        border: none;
        width: 100%;
        height: 100%;
    }
`;

const InfoContainer = styled.div`
    text-align: left;
    padding-left: 1em;
    margin-top: 0;

    @media (min-width: 768px) {
        flex: 5;
    }
`;

const Title = styled.h4`
    margin-top: 0;
    padding-top: 0;
`;

const AdditionalInfo = styled.div`
    font-size: 0.9em;
    line-height: 1.5em;
`;

export const VideoBox = ({ link, title, children }: { link: string, title: string, children: ReactNode }) => {
    return (
        <VideoBoxContainer>
            <VideoWrapper>
                <iframe
                    src={link}
                    allowFullScreen
                />
            </VideoWrapper>
            <InfoContainer>
                <Title>{title}</Title>
                <AdditionalInfo>
                    {children}
                </AdditionalInfo>
            </InfoContainer>
        </VideoBoxContainer>
    )
}
