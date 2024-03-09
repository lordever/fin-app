export class StringUtilService {
    getInitials(name?: string | null): string | null {
        if (!name) return null;
        return name
            .split(' ')
            .map(word => word[0].toUpperCase())
            .join('');
    }
}