import styled from 'styled-components';

export const HeroTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '65px' : '56px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
    max-width: 90%;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width:280px;
  height:280px;
  border-radius: 50%;
  margin: 58px auto 15px auto;
  position:relative;
`;

export const LeftSection = styled.div`
  width: 70%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const RightSection = styled.div`
  width: 30%;
  text-align:center;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    display: none;
    flex-direction: column;

    margin: 0 auto;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: Block;
    padding: 0;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const HeroNameText = styled.h4`
font-weight: 700;
text-align: center;
font-size: 28px;
line-height: 32px;
letter-spacing: 0.02em;
background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
color: #FFFFFF;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
font-size: 24px;
line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
font-size: 20px;
line-height: 28px;
letter-spacing: 0.02em;
margin-bottom: 4px;
}`;

export const HeroInfo = styled.p`
max-width: 800px;
font-size: 24px;
line-height: 40px;
font-weight: 300;
padding-bottom: 3.6rem;
color: rgba(255, 255, 255, 0.5);

@media ${(props) => props.theme.breakpoints.md} {
  max-width: 670px;
  font-size: 20px;
  line-height: 32px;
  padding-bottom: 24px;
}

@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
`;

export const HeroSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 0 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;

export const Hr = styled.hr`
  width: 5px;
  border: 0;
`;

