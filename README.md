# 한국제 한자 / 국자 표 (韓國製漢字/國字表)

## Structure

```json
{
    "char": The character itself, string
    "eumhun": The phono-semantic reading(s), [string], OPTIONAL
    "strk": Stroke count, number
    "cp": Unicode code point, string
    "variant": The more commonly used 異體字, if one exists, e.g. 擊 for 㐿, string, OPTIONAL
}
```

## Sources

- [『통합 漢韓大辭典』의 國字 처리에 대하여](https://archive.org/download/20210111_20210111_1641/%ED%86%B5%ED%95%A9%E6%BC%A2%E9%9F%93%E5%A4%A7%E8%BE%AD%E5%85%B8%EC%9D%98%E5%9C%8B%E5%AD%97%EC%B2%98%EB%A6%AC%EC%97%90%EB%8C%80%ED%95%98%EC%97%AC.pdf) - 단국대학교동양학연구원 (檀國大學校東洋學硏究院)
- [韓國외 固有漢字](https://www.korean.go.kr/nkview/nklife/1989_2/1989_0206.pdf) - 국립국어원 (國立國語院)
- [NAVER 사전](https://hanja.dict.naver.com) for 음훈 (音訓) readings
