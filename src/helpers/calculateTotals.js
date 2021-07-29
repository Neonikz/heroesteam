export const totalStats = stats => {

    const { totalIntelligence, totalStrength, totalSpeed, totalDurability, totalPower, totalCombat } = stats;

    const calculateIntelligence = totalIntelligence.reduce((sum, value) => ( sum + value.stat), 0);
    const calculateStrength = totalStrength.reduce((sum, value) => ( sum + value.stat), 0);
    const calculateSpeed = totalSpeed.reduce((sum, value) => ( sum + value.stat), 0);
    const calculateDurability = totalDurability.reduce((sum, value) => ( sum + value.stat), 0);
    const calculatePower = totalPower.reduce((sum, value) => ( sum + value.stat), 0);
    const calculateCombat = totalCombat.reduce((sum, value) => ( sum + value.stat), 0);
    
    return { calculateIntelligence, calculateStrength, calculateSpeed, calculateDurability, totalCombat, calculatePower, calculateCombat }
    
}