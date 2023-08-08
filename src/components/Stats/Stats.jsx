import {
  StatsList,
  StatCard,
  Title,
  StatItem,
  Label,
  Percentage,
} from './Stats.styled';

export const Statistic = ({ stats, title }) => {
  return (
    <StatCard>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatsList>
    </StatCard>
  );
};
