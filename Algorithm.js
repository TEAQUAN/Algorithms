ALGORITHM gmcCheckpointAlgo
VAR
    sentenceLength,numberWords,numberVowels,i,j,k : INTEGER;
    Sentence : STRING;
    sum : INTEGER := 0;
BEGIN

    Read(S);

    WHILE(Sentence[i] <> ".") DO
    sentenceLength := sentenceLength + 1;
    i := i + 1 ;
    END_WHILE

    WHILE(j<sentenceLength) DO
    IF(Sentence[j] = " ") THEN
    numberWords := numberWords+1;
    END_IF
    j:=j+1;
    END_WHILE
    
    WHILE(k<sentenceLength) DO
    IF(Sentence[k] = "a" OR Sentence[k] = "e" OR Sentence[k] = "i" OR Sentence[k] = "o" OR Sentence[k] = "u") THEN
    numberWords := numberVowels+1;
    END_IF
    k:=k+1;
    END_WHILE

    Write(sentenceLength,numberWords,numberVowels);

END
