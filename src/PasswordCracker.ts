export class PasswordCracker {
    public possibleChars:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_,?£:;/.';
    crackPassword(possibleCharacters: string, passwordLength: number, targetPassword: string): string {
        const start = Date.now();
        let found = false;
        let result = '';
    
        while (Date.now() - start <= 10000) {
          for (let length = 1; length <= passwordLength; length++) {
            if (found) break;
            const combinations = this.generateCombinations(possibleCharacters, length);
            for (const attempt of combinations) {
              const currentAttempt = attempt.join('');
              if (currentAttempt === targetPassword) {
                found = true;
                const elapsed = Date.now() - start;
                result = `Password found : ${targetPassword} in ${elapsed / 1000} seconds.`;
                break;
              }
            }
          }
    
          if (found) break;
        }
    
        if (!found) {
          result = `password is not found after 30 secends.`;
        }
    
        return result;
      }
    
      private generateCombinations(possibleCharacters: string, length: number): string[][] {
        const combinations: string[][] = [];
        const recursive = (prefix: string[] = []) => {
          if (prefix.length === length) {
            combinations.push(prefix);
            return;
          }
          for (const char of possibleCharacters) {
            recursive([...prefix, char]);
          }
        };
        recursive();
        return combinations;
      }
    }
  

  