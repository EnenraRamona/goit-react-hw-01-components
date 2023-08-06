import {StatsList, StatCard, Title, StatItem, Label, Persentage } from "./Stats.styled";


export const Statistic = ({ stats }) => {
    return (
        <StatCard>
            <Title>Upload Stats</Title>
            <StatsList>
                {stats.map(stat => (
                    <StatItem key={stat.id}>
                        <Label>{ stat.label }</Label>
                        <Persentage>{ stat.percentage }%</Persentage>
                    </StatItem>
                ))}
            </StatsList>
        </StatCard>
    );
}