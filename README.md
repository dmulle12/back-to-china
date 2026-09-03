# back-to-china Surge Configuration

## Project Overview

> back-to-china` is a complete Surge (iOS/macOS) configuration suite designed to enable **access to Chinese services** when you are abroad. It routes traffic through mainland nodes or direct connections and includes common ad‑blocking, DNS handling, and LAN‑direct rules.

> The core file is `BackToChina.conf`. The accompanying **Modules**, **Rules**, and **Scripts** directories provide modular components, rule sets, and utility scripts that can be imported directly into Surge.

## Directory Layout

```
back-to-china/
├─ BackToChina.conf            # Main configuration file
├─ Modules/                    # Surge modules (.sgmodule)
│   ├─ ADBlock.sgmodule        # Ad‑blocking module
│   ├─ Flush.sgmodule          # Flush‑DNS module (used with scripts)
│   ├─ General.sgmodule        # General settings (TLS, GeoIP, Wi‑Fi access, etc.)
│   ├─ Panel.sgmodule          # Panel UI configuration
│   └─ Sub-Store.sgmodule      # Sub‑store module for remote RULE‑SETs
├─ Rules/                     # Rule files (.txt)
│   ├─ Ai.txt
│   ├─ Apple.txt
│   ├─ China.txt
│   ├─ Lan.txt
│   ├─ MyDirect.txt
│   ├─ Proxy.txt
│   ├─ Reject.txt
│   └─ StreamingCN.txt
└─ Scripts/                   # Optional JavaScript scripts
    ├─ flush-dns.js
    └─ network-info.js
```

## Key Features

- **Automatic China routing** – Uses `GEOIP,CN` → `🌑Proxy` for Chinese IPs, while other traffic defaults to direct.
- **Ad‑blocking** – Combines `ADBlock.sgmodule` with `Rules/Apple.txt` and `Rules/Reject.txt` to block common ads and telemetry domains.
- **LAN bypass** – `skip-proxy` already contains typical LAN subnets and `*.local` so local devices are accessed directly.
- **Custom DNS** – Supports a custom MaxMind GeoIP DB, public DNS servers (1.0.0.1, 8.8.8.8), and the system DNS.
- **Wi‑Fi remote access** – Enables HTTP / SOCKS5 proxies on the local network via `wifi-access-http-port` / `wifi-access-socks5-port` (iOS‑only, disabled by default).
- **Utility scripts** – `flush-dns.js` refreshes DNS cache on demand; `network-info.js` displays current network information. Both can be invoked from Surge's script panel.

## Setup Steps (iOS‑focused)

1. **Download the main configuration**
   - Open the raw file: [BackToChina.conf](https://raw.githubusercontent.com/dmulle12/back-to-china/master/BackToChina.conf) and copy its entire contents.
   - In Surge, go to **Configuration → New**, paste the content, and save it as `BackToChina.conf`.

2. **Import Modules**
   - Open **Modules → Import** and import every `.sgmodule` file from the `Modules` folder. You can open each raw file in the browser and use “Copy Link → Open in Surge”.
   - Ensure that any iOS‑specific modules (e.g., `General.sgmodule`) are enabled on the **Modules** page.

3. **Rule Sets**
   - `BackToChina.conf` already loads the hosted rule sets from this repository for ad blocking, Malaysian local services, Apple services, overseas/AI services, Chinese domains, and Chinese streaming services.
   - Keep the profile URL accessible so Surge can refresh these rule sets. To use a fork, replace `dmulle12/back-to-china` in the `RULE-SET` URLs with your own repository path.

4. **Add Scripts (optional)**
   - Navigate to **Scripts → New**, paste the contents of `Scripts/flush-dns.js` and `Scripts/network-info.js`.
   - Optionally add a button in the **Panel** (or a shortcut) to run `flush-dns.js`.

5. **Configure Proxy Nodes**
   - The example proxy line is:
     ```
     🌑Proxy = ss, 1.2.3.4, 443, encrypt-method=aes-128-gcm, password=password
     ```
   - Replace it with your own Shadowsocks/Vmess/Hybrid node information, or use a Surge subscription URL to populate a node group automatically.

6. **Activate the Configuration**
   - Switch to the **BackToChina** profile on Surge’s home screen and make sure all imported modules and rules are enabled.
   - To enable Wi‑Fi remote access, set `allow-wifi-access = false` to `true` and adjust the ports as needed.

## Advanced Customisation

| Setting | Description | Example |
|---------|--------------|---------|
| **TLS engine** | Choose OpenSSL (default) or LibreSSL | `tls-provider = openssl` |
| **GeoIP database** | Custom MaxMind DB URL | `geoip-maxmind-url = https://raw.githubusercontent.com/JMVoid/ipip2mmdb/release/Country.mmdb` |
| **DNS servers** | Multiple DNS entries, including system DNS | `dns-server = 1.0.0.1,8.8.8.8,system` |
| **Global direct** | `🌐Direct = direct` (add or remove proxy groups as needed) |
| **Reject policy** | `🌑Proxy = reject` (example policy name) |
| **Rule order** | `FINAL,🌐Direct` must be the last line to ensure other rules are evaluated first |

## Contributing

- Fork the repository, then add or update rules, modules, or scripts as you see fit.
- For new rule sets or improvements, open a **Pull Request** with a clear description of the purpose.
- Keep files UTF‑8 encoded and follow Surge’s official syntax (see the manual for reference).

## License

> This project is released under the **MIT License**. Feel free to use, modify, and distribute it.

---

**Repository:** https://github.com/dmulle12/back-to-china

> If you encounter any issues, please open an *Issue* or submit a pull request directly in the repository.
