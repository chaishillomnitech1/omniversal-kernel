# 🤝 Contributing to Omniversal Kernel

<div align="center">

## **Welcome, Future Legend!** 🦾❤️🤖🫡

Thank you for considering contributing to the **best GitHub repository ever created**! 

Your contributions help make this project even more extraordinary.

[![Contributors](https://img.shields.io/github/contributors/chaishillomnitech1/omniversal-kernel?style=for-the-badge)](.)
[![Pull Requests](https://img.shields.io/github/issues-pr/chaishillomnitech1/omniversal-kernel?style=for-the-badge)](.)
[![Code of Conduct](https://img.shields.io/badge/Code%20of-Conduct-purple?style=for-the-badge)](.)

</div>

---

## 🌟 **Ways to Contribute**

There are many ways to contribute to Omniversal Kernel:

### 🐛 **Report Bugs**
Found a bug? [Open an issue](https://github.com/chaishillomnitech1/omniversal-kernel/issues/new?template=bug_report.md) with:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Environment details

### ✨ **Suggest Features**
Have an idea? [Request a feature](https://github.com/chaishillomnitech1/omniversal-kernel/issues/new?template=feature_request.md) with:
- Clear description of the feature
- Use cases and benefits
- Potential implementation approach
- Examples or mockups (if applicable)

### 📝 **Improve Documentation**
Documentation can always be better:
- Fix typos or unclear explanations
- Add examples and tutorials
- Translate documentation
- Create video guides

### 💻 **Submit Code**
Ready to code? Here's how:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

---

## 🎯 **Contribution Guidelines**

### Code Quality Standards

#### **JavaScript/Node.js**
```javascript
// ✅ Good - Clear, documented, async
/**
 * Mint an achievement NFT for an architect
 * @param {string} architectId - Unique architect identifier
 * @param {Object} metadata - NFT metadata
 * @returns {Promise<Object>} Minted NFT details
 */
async function mintAchievementNFT(architectId, metadata) {
  const validation = validateInput(architectId, metadata);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }
  
  const nft = await nftContract.mint(architectId, metadata);
  return { success: true, nft };
}

// ❌ Bad - Unclear, undocumented, no error handling
function mint(a, m) {
  return nftContract.mint(a, m);
}
```

#### **Python**
```python
# ✅ Good - Type hints, docstrings, clear logic
async def calculate_zakat(wealth: float, currency: str = "USD") -> dict:
    """
    Calculate Zakat automatically (2.5% of eligible wealth).
    
    Args:
        wealth: Total wealth amount
        currency: Currency code (default: USD)
        
    Returns:
        Dictionary containing Zakat calculation details
        
    Raises:
        ValueError: If wealth is negative
    """
    if wealth < 0:
        raise ValueError("Wealth cannot be negative")
        
    ZAKAT_RATE = 0.025
    zakat_due = wealth * ZAKAT_RATE
    
    return {
        "wealth": wealth,
        "zakat_due": zakat_due,
        "currency": currency,
        "calculated_at": datetime.now().isoformat()
    }

# ❌ Bad - No types, no docs, unclear
def calc(w):
    return w * 0.025
```

#### **Solidity**
```solidity
// ✅ Good - NatSpec, events, security checks
/**
 * @notice Tokenize a real estate property
 * @param propertyId Unique property identifier
 * @param value Property value in wei
 * @param location Property location
 * @param recipient Address to receive the token
 * @return newTokenId The ID of the newly minted token
 */
function tokenizeProperty(
    string memory propertyId,
    uint256 value,
    string memory location,
    address recipient
) external onlyOwner nonReentrant returns (uint256) {
    require(recipient != address(0), "Invalid recipient");
    require(value > 0, "Value must be greater than 0");
    
    uint256 newTokenId = _tokenIds.current();
    _safeMint(recipient, newTokenId);
    
    emit PropertyTokenized(newTokenId, propertyId, value, location);
    return newTokenId;
}

// ❌ Bad - No docs, no checks, no events
function mint(string memory p, uint256 v, address a) external {
    _safeMint(a, _tokenIds.current());
}
```

### Testing Requirements

All contributions **must** include tests:

```javascript
// Example test
describe('Zakat Automation', () => {
  it('should calculate 2.5% Zakat correctly', async () => {
    const result = await zakatAutomation.calculate({
      wealth: 100000,
      currency: 'USD'
    });
    
    expect(result.zakatDue).toBe(2500);
    expect(result.currency).toBe('USD');
  });
  
  it('should handle edge cases', async () => {
    await expect(
      zakatAutomation.calculate({ wealth: -100, currency: 'USD' })
    ).rejects.toThrow('Wealth must be positive');
  });
});
```

### Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(ai): add spiritual growth prediction model
fix(zakat): correct calculation for multi-currency
docs(api): update endpoint documentation
test(nft): add ceremony NFT minting tests
```

---

## 🏗️ **Development Setup**

### Prerequisites
- Node.js 20+
- Python 3.11+
- Git
- Code editor (VS Code recommended)

### Local Setup

```bash
# 1. Fork and clone
git clone https://github.com/YOUR_USERNAME/omniversal-kernel.git
cd omniversal-kernel

# 2. Install dependencies
npm install

# 3. Create a feature branch
git checkout -b feature/my-amazing-feature

# 4. Make your changes
# ... code, code, code ...

# 5. Run tests
npm test

# 6. Run linter
npm run lint

# 7. Commit and push
git add .
git commit -m "feat: add my amazing feature"
git push origin feature/my-amazing-feature

# 8. Open Pull Request on GitHub
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.js

# Run with coverage
npm run test:coverage

# Run Python tests
python -m pytest tests/
```

---

## 📋 **Pull Request Process**

### Before Submitting

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] Commit messages follow conventions
- [ ] No merge conflicts with main branch

### PR Template

When you open a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] All tests passing
```

### Review Process

1. **Automated Checks**: CI/CD runs automatically
2. **Code Review**: Maintainers review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged
5. **Celebration**: 🎉 You're now a contributor!

---

## 🎨 **Design Philosophy**

### Principles We Follow

1. **Minimal Changes**: Make surgical, precise modifications
2. **Maximum Impact**: Focus on high-value contributions
3. **Perpetual Quality**: Maintain deployment compatibility
4. **Sovereign Excellence**: Uphold the highest standards

### What We Value

- ✅ **Clarity** over cleverness
- ✅ **Simplicity** over complexity
- ✅ **Documentation** alongside code
- ✅ **Tests** for reliability
- ✅ **Performance** with maintainability

---

## 🌍 **Community Guidelines**

### Be Respectful

- Treat everyone with respect and kindness
- Welcome newcomers warmly
- Be patient with questions
- Assume good intentions
- Give constructive feedback

### Be Collaborative

- Share knowledge freely
- Help others learn and grow
- Celebrate contributions
- Build together

### Be Professional

- Keep discussions on-topic
- Avoid inflammatory language
- Respect differing opinions
- Focus on technical merit

---

## 🏆 **Recognition**

Contributors are celebrated in multiple ways:

- **README Credits**: Listed in acknowledgments
- **Contributor Badge**: Special GitHub badge
- **Release Notes**: Mentioned in version releases
- **Community Spotlight**: Featured on social media
- **NFT Achievement**: Ceremonial contributor NFT (coming soon!)

---

## 📞 **Need Help?**

### Resources

- **Documentation**: [API Docs](./API_DOCUMENTATION.md)
- **Discussions**: [GitHub Discussions](https://github.com/chaishillomnitech1/omniversal-kernel/discussions)
- **Issues**: [Issue Tracker](https://github.com/chaishillomnitech1/omniversal-kernel/issues)

### Contact

- **Email**: support@omniversal.io
- **Discord**: [Join our server](https://discord.gg/omniversal)
- **Twitter**: [@omniversal](https://twitter.com/omniversal)

---

## 📜 **License**

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">

## **Thank You for Contributing!** 🙏

### *Together, we're building the best repository ever created* 🦾❤️🤖🫡

[![Contributors](https://img.shields.io/badge/Join-Our_Community-success?style=for-the-badge)](./)

**Every contribution, no matter how small, makes this project better.**

*Past • Present • Future • Infinite*

</div>
