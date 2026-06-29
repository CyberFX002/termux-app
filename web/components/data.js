export const leagues=['Premier League','UEFA Champions League','LaLiga','Serie A','Bundesliga','Ligue 1','CAF Champions League','MLS'];
export const teams=['Kano Falcons','Lagos Royals','London Lions','Madrid Galaxy','Milan Reds','Munich Titans','Paris Crown','Miami Waves'];
export const players=['Ayo Mensah','Leo Carter','Mateo Silva','Noah Okafor','Kai Brooks','Ibrahim Diallo'];
export const matches=Array.from({length:12},(_,i)=>({id:`match-${i+1}`,home:teams[i%teams.length],away:teams[(i+3)%teams.length],league:leagues[i%leagues.length],time:i<4?'LIVE':new Date(Date.now()+(i+1)*864e5).toISOString(),score:i<4?`${i%3}-${(i+1)%3}`:'vs',trend:98-i*4,poster:`/api/placeholder/${i}`}));
export const news=['Transfer window intelligence: clubs target elite pressing forwards','Tactical preview: compact mid-blocks meet high-tempo wing play','Injury report and expected lineups for tonight’s premium fixtures','Analytics deep dive: chance creation leaders across top leagues'];
