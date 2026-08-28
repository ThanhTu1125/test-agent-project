# AGENT INSTRUCTIONS & SKILLS

## Skill: git-smart-commit
Khi người dùng yêu cầu commit/push code hoặc gọi smart-commit, hãy tuân thủ quy trình sau:
1. **Kiểm tra an toàn (Safety Audit):**
   - Chạy `git status` và `git diff` để kiểm tra.
   - Nếu phát hiện API key (như `sk-or-v1-...`, `ghp_...`) hoặc file cấu hình nhạy cảm (`.env`), lập tức cảnh báo và HỦY commit.
2. **Phân tích Diff & Tạo Conventional Commit Message:**
   - Dựa trên nội dung thay đổi, tạo commit message chuẩn: `feat:`, `fix:`, `refactor:`, `docs:`, `style:`,...
3. **Thực thi lệnh Git:**
   - Chạy `git add .`
   - Chạy `git commit -m "<Conventional Commit Message>"`
   - Chạy `git push origin HEAD`
4. **Báo cáo kết quả:** In ra commit message đã tạo và link/trạng thái push lên GitHub.
