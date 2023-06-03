import { Dispatch, useEffect, useState } from 'react';

export function useEphemeral<T>(duration: number, defaultValue?: T): [T|undefined, Dispatch<T>] {
	const [value, setValue] = useState<T|undefined>(defaultValue);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (value !== undefined) {
			timeout = setTimeout(() => {
				setValue(undefined);
			}, duration);
		}

		return () => clearTimeout(timeout);
	}, [value]);

	return [value, setValue];
}