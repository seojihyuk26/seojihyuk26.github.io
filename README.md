# Jihyuk SEO 연구 홈페이지

공개 주소: https://seojihyuk26.github.io/

GitHub Pages 기본 Jekyll 빌드를 쓰는 단일 페이지입니다. 외부 테마, 외부 폰트, Node 도구, 사용자 추가 플러그인 없이 동작합니다. 평소 업데이트에는 컴퓨터에 Jekyll이나 Node를 설치할 필요가 없습니다.

## 평소 업데이트

1. 저장소의 **main** 브랜치에서 **index.md**를 엽니다.
2. 연필 모양 **Edit** 버튼을 누릅니다.
3. 내용을 바꾸고 **Commit changes**를 눌러 main에 저장합니다.
4. Pages 빌드가 끝난 뒤 공개 주소를 확인합니다. 변경사항 반영에는 몇 분 걸릴 수 있습니다.

옛 **gh-pages** 브랜치의 생성 파일은 수정하지 마세요. Pages 게시 위치는 **Settings → Pages → Deploy from a branch → main → / (root)**입니다.

## 소개 수정

index.md 위쪽의 두 줄 `---` 사이가 프로필 설정입니다. title, role, affiliation, research, email 값을 수정합니다. 따옴표와 들여쓰기를 유지하세요.

## 논문 추가

index.md의 Papers and preprints 아래에 아래 블록을 복사해 넣습니다. 최신 논문을 위에 두세요. 제목 링크는 arXiv, DOI 또는 공개 논문 주소로 바꿉니다. 실제 게재 상태를 정확하게 씁니다.

```markdown
### [Paper title](https://arxiv.org/abs/EXAMPLE)

Author One and Author Two  
Preprint, 2027 · arXiv:EXAMPLE
```

저자 줄 끝의 공백 두 개는 다음 줄을 줄바꿈합니다. 논문마다 빈 줄을 두세요.

## CV 추가

1. 저장소 루트에 **cv.pdf**를 업로드합니다.
2. index.md의 cv 값을 **"/cv.pdf"**로 바꿉니다.
3. 새 CV는 같은 이름의 파일을 교체하면 기존 링크가 유지됩니다.

## ORCID 연결

index.md의 orcid 값에 본인의 전체 ORCID 프로필 URL을 넣습니다. 예: **"https://orcid.org/본인의-식별번호"**. 임의 번호를 넣지 마세요.

CV와 ORCID가 빈 문자열이면 깨진 링크 대신 준비 중인 문구가 표시됩니다.

## 화면과 파일 구조

- index.md: 모든 프로필과 논문 내용
- _layouts/default.html: 고정된 HTML 구조
- assets/style.css: 반응형 디자인 및 밝은/어두운 색상
- assets/theme.js: System / Light / Dark 선택과 브라우저 내 저장
- _config.yml: 사이트 주소와 기본 Jekyll 설정
- 404.html: 없는 주소 접속 시 홈(`/`)으로 즉시 리다이렉트

외관은 방문자의 시스템 설정을 기본으로 따릅니다. 수동 선택은 해당 브라우저에만 저장됩니다. JavaScript가 꺼져도 모든 내용과 링크는 표시됩니다. 논문이나 프로필 변경 시 디자인 파일을 수정할 필요는 없습니다.
