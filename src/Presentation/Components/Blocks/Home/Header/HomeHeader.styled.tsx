import styled from '@emotion/styled';

const HeaderBox = styled.div`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 6.5rem 0 5rem 0;
   gap: 2rem;
   background-image: linear-gradient(180deg, #f3f3f3 80%, rgba(243, 243, 243, 0) 100%);
   margin-bottom: 10rem;
`;

const TextZone = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 0 25%;
   h2 {
      text-align: center;
      font-size: 3.5rem;
      line-height: 120%;
      font-weight: 600;
   }
`;

const CatchPhrase = styled.h1`
   font-size: 2rem;
   line-height: 150%;
   font-weight: 500;
   margin-top: 1rem;
   text-align: center;
`;

export { HeaderBox, CatchPhrase, TextZone };
