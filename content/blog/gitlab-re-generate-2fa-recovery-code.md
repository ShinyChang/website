---
path: gitlab-re-generate-2fa-recovery-code
date: 2023-01-29T06:29:06.209Z
title: GitLab re-generate 2FA recovery code
description: Regenerate recovery code by ssh for GitLab
tags: []
---

I﻿n case you lose your device or your TOTP code does not match the server side and your recovery code dismiss. You can use any device which has ssh-keys to enter

```
ssh git@gitlab.com 2fa_recovery_codes
```

t﻿hen the GitLab server will re-generate the new recovery code for you. The result will looks like below:

```
ssh git@gitlab.com 2fa_recovery_codes
Are you sure you want to generate new two-factor recovery codes?
Any existing recovery codes you saved will be invalidated. (yes/no)
yes

Your two-factor authentication recovery codes are:

****************
****************
****************
****************
****************
****************
****************
****************
****************
****************

During sign-in, use one of the codes above when prompted for
your two-factor code. Then, visit your Profile Settings and add
a new device so you do not lose access to your account again.
```

After that, you can enter GitLab and setup new device again.
